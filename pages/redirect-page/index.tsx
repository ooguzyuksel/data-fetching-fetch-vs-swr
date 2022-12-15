import { Button } from '@/components/Button';
import React from 'react';

const RedirectPage = () => (
  <div>
    <h1>
      Please click back button to navigate previous page and fetch data again
    </h1>
    <Button>
      <p>I will display &#x2190;</p>Back
    </Button>
  </div>
);

export default RedirectPage;
