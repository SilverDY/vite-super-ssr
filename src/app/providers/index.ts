import compose from 'compose-function';

import { withStyles } from './withStyles';
import { withLocalization } from './withLocalization';
import { withRecoil } from './withRecoil';

export const withProviders = compose(withStyles, withLocalization, withRecoil);
