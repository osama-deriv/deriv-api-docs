import React from 'react';
import { Text } from '@deriv/ui';
import styles from './manage-tokens.module.scss';
import ApiTokenForm from '../components/api-token-form/api-token-form';
import ApiTokenTable from '../components/api-token-table';
import Translate from '@docusaurus/Translate';

const ApiToken = () => {
  return (
    <section className={styles.manage_tokens}>
      <Text as='h2' type='subtitle-2'>
        <Translate>API Token Manager</Translate>
      </Text>
      <ApiTokenForm />
      <ApiTokenTable />
    </section>
  );
};

export default ApiToken;
