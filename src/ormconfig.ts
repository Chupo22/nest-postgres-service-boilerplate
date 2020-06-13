import { migrationsConfig, getSeedsConfig, schemaName } from '@config';

export = [getMigrationsCliConfig(), getSeedsConfig];

function getMigrationsCliConfig() {
  const config = migrationsConfig;
  const commandParts = process.argv[2].split(':');
  const command = commandParts[1] as 'generate' | 'create' | 'run' | 'revert';

  if (command === 'generate') {
    return {
      ...config,
      schema: schemaName,
    };
  }

  return config;
}
