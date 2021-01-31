import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		position: 'relative',
		'&:after': {
			content: '"Tung Pham - 2021"',
			position: 'absolute',
			bottom: -22,
			right: 0,
			color: '#aaa',
		},
	},
	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		color: 'rgba(0,183,255, 1)',
	},
	container: {
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column-reverse',
		},
	},
	image: {
		marginLeft: '15px',
	},
}));

export default useStyles;
