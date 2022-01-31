import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        marginBottom: 36,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    wrapperComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginRight: 10,
        fontSize: 12,
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