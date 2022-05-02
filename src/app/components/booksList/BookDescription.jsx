import React from 'react'

import { Typography } from '@mui/material'

const BookDescription = ({children}) => (
  <Typography variant='body2'>
    {children}
  </Typography>
)

export default BookDescription