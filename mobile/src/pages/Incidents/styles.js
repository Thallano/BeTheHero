import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,  
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomColor: '#737380',
        borderBottomWidth: 1,
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop:32,
        color:'#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight:24,
        color: '#737380'
    },

    incidentList: {
        marginTop:32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius:3.84,
        elevation:5
            
    },

    incidentProperty: {
        fontSize:14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 25,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

});
