import { useCallback } from 'react';

import { FormProvider, useForm } from '~shared/lib/validation';
import { FormattedMessage, provideTranslation } from '~shared/lib/l10n';
import { BaseTextField, Button, Grid, Stack } from '~shared/ui';

import { mockSignUp } from '../../api';
import { SignUpData, SignUpFormValues, mapFormDataToApiData } from '../../model';

import { locales } from '../../locales';

export interface SignUpFormProps {
  onSignUp?: (payload: SignUpData) => void;
  onChangeForm: (payload: 'signIn') => void;
  formId?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onSignUp,
  onChangeForm,
  formId = 'form:sign-up',
}) => {
  const form = useForm<SignUpFormValues>({
    mode: 'onBlur',
    defaultValues: {},
  });

  const handleSubmit = useCallback(
    (payload: SignUpFormValues) => {
      mockSignUp(mapFormDataToApiData(payload)).then(({ data }) => {
        onSignUp && onSignUp(data);
      });
    },
    [onSignUp]
  );

  const handleChangeForm = useCallback(
    (newForm: Parameters<SignUpFormProps['onChangeForm']>[0]) => {
      onChangeForm(newForm);
    },
    [onChangeForm]
  );

  const validateRepeatPassword = useCallback(
    (v: string) => {
      const pass = form.getValues('password');

      return v === pass;
    },
    [form]
  );

  return (
    <FormProvider {...form}>
      <form id={formId} data-test-id={formId} onSubmit={form.handleSubmit(handleSubmit)} noValidate>
        <Grid spacing={2} direction="column" container>
          <Grid item xs>
            <Stack spacing={1}>
              <BaseTextField
                name="name"
                label={<FormattedMessage id="feature.signUp.labels.nickname" />}
                required
                fullWidth
              />
              <BaseTextField
                name="email"
                label={<FormattedMessage id="feature.signUp.labels.email" />}
                required
                fullWidth
              />
              <BaseTextField
                name="password"
                type="password"
                label={<FormattedMessage id="feature.signUp.labels.password" />}
                required
                fullWidth
              />
              <BaseTextField
                name="password2"
                type="password"
                label={<FormattedMessage id="feature.signUp.labels.repeatPassword" />}
                required
                fullWidth
                rules={{
                  validate: validateRepeatPassword,
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs>
            <Stack spacing={1}>
              <Button type="submit" size="small" fullWidth>
                <FormattedMessage id="common.buttons.done" />
              </Button>

              <Button
                variant="text"
                size="small"
                onClick={handleChangeForm.bind(null, 'signIn')}
                fullWidth
              >
                <FormattedMessage id="feature.signUp.buttons.alreadyHaveAccount" />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

const TransaltedSignUpForm = provideTranslation<SignUpFormProps>(locales, SignUpForm);

export { TransaltedSignUpForm as SignUpForm };
