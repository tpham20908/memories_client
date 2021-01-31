import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
	const classes = useStyles();
	const posts = useSelector((state) => state.posts);

	if (!posts.length) {
		return <CircularProgress />;
	}
	return (
		<Grid
			container
			className={classes.mainContainer}
			alignItems='stretch'
			spacing={3}
		>
			{posts.reverse().map((post) => (
				<Grid item key={post._id} xs={12} md={6}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
