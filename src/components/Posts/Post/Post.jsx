import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';
import {
	ThumbUpAlt as ThumbUpAltIcon,
	Delete as DeleteIcon,
	MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons';
import moment from 'moment';

import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
	const classes = useStyles();
	const {
		_id,
		creator,
		title,
		message,
		tags,
		selectedFile,
		createdAt,
		likeCount,
	} = post;

	const tagsText = tags[0]
		.split(' ')
		.map((t) => `#${t}`)
		.join(' ');

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={selectedFile} title={title} />
			{/* Left overlay */}
			<div className={classes.overlay}>
				<Typography variant='h6'>{creator}</Typography>
				<Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
			</div>

			{/* Right overlay */}
			<div className={classes.overlay2}>
				<Button
					style={{ color: 'white' }}
					size='small'
					onClick={() => {
						setCurrentId(_id);
					}}
				>
					<MoreHorizIcon />
				</Button>
			</div>

			{/* Details */}
			<div className={classes.details}>
				<Typography variant='body2' color='textSecondary'>
					{tagsText}
				</Typography>
			</div>

			{/* Content */}
			<CardContent>
				<Typography className={classes.title} variant='h5' gutterBottom>
					{message}
				</Typography>
			</CardContent>

			<CardActions className={classes.cardActions}>
				<Button size='small' color='primary' onClick={() => {}}>
					<ThumbUpAltIcon fontSize='small' /> Like {likeCount}
				</Button>
				<Button size='small' color='primary' onClick={() => {}}>
					<DeleteIcon fontSize='small' /> Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
