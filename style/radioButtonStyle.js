import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    wrapperComponent: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    text: {
        marginRight: 10,
        fontSize: 15,
        color: 'black',
    },
	style: {
		height: 32,
		width: 32,
		borderRadius: 110,
		borderWidth: 2,
		borderColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
        marginLeft: 205,
	},
	selected: {
		width: 16,
		height: 16,
		borderRadius: 55,
		backgroundColor: 'black',
    },
    result: {
        marginTop: 22,
        color: 'white',
        fontWeight: '600',
        backgroundColor: 'black',
    },
});