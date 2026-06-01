// Single block registry. Each renderer block is a { Component, fields }
// namespace and declares its own client/server boundary, so the app no longer
// curates a server/client split by hand.
export * from '@openstax/flex-page-renderer/blocks/index';
