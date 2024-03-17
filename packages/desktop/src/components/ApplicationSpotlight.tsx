import { rem } from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { actions } from './SpotlightAction.tsx';

const ApplicationSpotlight = () => {
  return (
    <>
      <Spotlight
        actions={actions}
        nothingFound='Nothing found...'
        highlightQuery
        shortcut='mod + shift + F'
        searchProps={{
          leftSection: (
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ),
          placeholder: 'Search...',
        }}
      />
    </>
  );
};

export { ApplicationSpotlight };
