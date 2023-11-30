import { Container, Card, Typography, CardContent, Box, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

import { SnippetCard } from '../components';

export const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} my={4}>
                <Grid item>
                    <Box sx={{ maxWidth: 'sm' }}>
                        <Typography component='h2' variant="h3" sx={{ fontWeight: 'bold' }}>
                            Write once, paste everywhere
                        </Typography>
                        <Typography sx={{ fontSize: 20, color: grey[600] }}>
                            Find, copy and use your ideas everywhere. This is a "snippet" manager or clipboard to keep your most used code at your fingertips.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <SnippetCard
                        id={0}
                        title='FizzBuzz'
                        body={`const fizzBuzz = number => {}`}
                        syntax='javascript'
                        updatedAt='2022-05-04 05:23:19.231+00'
                        userId={NaN}
                        details={false}
                    />
                </Grid>
                <Grid item>
                    <Card sx={{ width: 345 }}>
                        <CardContent>
                            <Typography component='h2' variant="h4">
                                Snippet
                            </Typography>
                            <Typography component='h2' variant="h5" sx={{ color: 'primary.main' }}>

                                /ˈsnɪpɪt/
                            </Typography>
                            <Typography>
                                A short reusable piece of code
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
