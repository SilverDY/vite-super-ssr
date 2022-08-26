import { useCallback } from 'react';

import { useSignIn } from '~shared/lib/auth';
import { FormProvider, useForm } from '~shared/lib/validation';
import { FormattedMessage, provideTranslation } from '~shared/lib/l10n';
import { BaseTextField, Button, Grid, Stack } from '~shared/ui';

import { mockSignIn } from '../../api';
import { SignInData, SignInFormValues } from '../../model';
import { locales } from '../../locales';

export interface SignInFormProps {
  onSignIn: (payload: SignInData) => void;
  onChangeForm: (payload: 'signUp') => void;
  formId?: string;
}

const SignInForm: React.FC<SignInFormProps> = ({
  onSignIn,
  onChangeForm,
  formId = 'form:sign-in',
}) => {
  const form = useForm<SignInFormValues>({
    mode: 'onBlur',
    defaultValues: {},
  });

  const authSignIn = useSignIn();

  const handleSubmit = useCallback(
    (payload: SignInFormValues) => {
      mockSignIn(payload).then(({ data }) => {
        if (
          authSignIn({
            token: data.token,
            expiresIn: data.ttl,
            tokenType: data.type,
          })
        ) {
          onSignIn(data);
        }
      });
    },
    [onSignIn, authSignIn]
  );

  const handleChangeForm = useCallback(
    (newForm: Parameters<SignInFormProps['onChangeForm']>[0]) => {
      onChangeForm(newForm);
    },
    [onChangeForm]
  );

  return (
    <FormProvider {...form}>
      <form id={formId} data-test-id={formId} onSubmit={form.handleSubmit(handleSubmit)} noValidate>
        <Grid spacing={2} direction="column" container>
          <Grid item xs>
            <Stack spacing={1}>
              <BaseTextField
                name="name"
                label={<FormattedMessage id="feature.signIn.labels.nickname" />}
                required
                fullWidth
              />
              <BaseTextField
                name="password"
                type="password"
                label={<FormattedMessage id="feature.signIn.labels.password" />}
                required
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs>
            <Stack spacing={1}>
              <Button type="submit" size="small" fullWidth>
                <FormattedMessage id="feature.signIn.buttons.signIn" />
              </Button>
              <Button
                variant="text"
                size="small"
                onClick={handleChangeForm.bind(null, 'signUp')}
                fullWidth
              >
                <FormattedMessage id="feature.signIn.buttons.createAccount" />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

const TransaltedSignInForm = provideTranslation<SignInFormProps>(locales, SignInForm);

export { TransaltedSignInForm as SignInForm };
