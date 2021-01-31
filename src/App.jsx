import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import memories from './images/memories.jpg';
import Form from './components/Form';
import Posts from './components/Posts';
import { getPosts } from './actions/posts';
import useStyles from './styles';

export default function App() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null);

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<Container maxWidth='lg' className={classes.mainContainer}>
			<AppBar position='static' color='inherit' className={classes.appBar}>
				<Typography variant='h2' align='center' className={classes.heading}>
					Memories
				</Typography>
				<img
					src={memories}
					alt='memories'
					height='60'
					className={classes.image}
				/>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						className={classes.container}
						container
						justify='space-between'
						alignItems='flex-start'
						spacing={3}
					>
						<Grid item xs={12} md={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} md={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}
