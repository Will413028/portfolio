import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['gitmoji'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-case': [0], // Disable type-case rule to allow any case after emoji
    'type-enum': [0], // Disable type-enum to allow any type after emoji
    'subject-case': [0], // Allow any case for subject
  },
  ignores: [message => message.startsWith('chore: bump')], // Ignore dependabot commits
};

export default Configuration;
