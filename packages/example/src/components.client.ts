'use client';
// Establishes the 'use client' boundary around the shared Link component so it
// becomes a client reference. Server blocks pull it from the components
// registry (see FlexPage) instead of importing it, which keeps them on the
// server while Link still hydrates and handles clicks on the client.
export { Link } from '@openstax/flex-page-renderer/components/Link';
