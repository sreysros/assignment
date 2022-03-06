import React from 'react';
import Container from './components/Container/Container';
import {
    FlatList,
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Images from './theme/images';
import moment from 'moment';

const listData = [
    {id:1,
    profile: Images.associate.icAdHoc,
    name: 'ADHOC - The Cambodia Human Rights & Development Association, ',
    address: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear, Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear, Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    detail: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear, Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    posted_date: '2021-10-20'
    },
    {id:2,
        profile: Images.associate.icBunly,
        name: 'ADHOC - The Cambodia Human Rights & Development Association',
    address: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    detail: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    posted_date: '2021-10-20'
        },
        {id:3,
            profile: Images.associate.icChamroeunPhal,
            name: 'ADHOC - The Cambodia Human Rights & Development Association',
    address: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    detail: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    posted_date: '2021-10-20'
            },
            {id:4,
                profile: Images.associate.icJbac,
                name: 'ADHOC - The Cambodia Human Rights & Development Association',
    address: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    detail: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    posted_date: '2021-10-20'
                },
                {id:5,
                    profile: Images.associate.icScw,
                    name: 'ADHOC - The Cambodia Human Rights & Development Association',
    address: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    detail: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    posted_date: '2021-10-20'
                    },
                    {id:6,
                        profile: Images.associate.icFoundation,
                        name: 'ADHOC - The Cambodia Human Rights & Development Association',
    address: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    detail: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    posted_date: '2021-10-20'
                        },
                        {id:7,
                            profile: Images.associate.icTrucking,
                            name: 'ADHOC - The Cambodia Human Rights & Development Association',
    address: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    detail: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    posted_date: '2021-10-20'
                            },
                            {id:8,
                                profile: Images.associate.icCavac,
                                name: 'ADHOC - The Cambodia Human Rights & Development Association',
    address: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    detail: 'Andong Por Village, Sangkat Kampong Pranak, Preah Vihear City, Preah Vihear',
    posted_date: '2022-01-20'
                                }
]
const HomeScreen = () => {
    const formatDate = (date) => {
        return moment(date).startOf('day').fromNow();
    }
    const renderItem = ({item, index}) => {
        return (
            <View style={{padding: 20, 
            marginBottom: 10, 
            marginHorizontal: 10, 
            backgroundColor: '#f9fafb',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowRadius: 1,
		shadowOpacity: 0.3,
		elevation: 2,
		height: 340}}>
                    <Image source={item.profile} style={{width: 117, height: 117, borderRadius: 117/2, alignSelf: 'center', marginVertical: 10}} />
                <Text style={{fontSize: 18, fontWeight: '600', marginBottom: 6}} numberOfLines={2}>{item.name}</Text>
                <Text style={{fontSize: 14, marginBottom: 6}} numberOfLines={2}>{item.address}</Text>
                <Text style={{fontSize: 14, marginBottom: 6, color: 'gray'}} numberOfLines={3}>{item.detail}</Text>
        <Text>{formatDate(item.posted_date)}</Text>
            </View>

        )

    }
    return (
<Container style={{flex:1}} isSafeAreaView>
    <View>
			<View style={{marginVertical: 20, flex:1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                width={86} height={40} 
        style={{width: 86, height: 40}}
        source={Images.home.icLogo}
      />
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', height: 40, alignContent: 'center'}}>
                <TouchableOpacity onPress={() =>console.log('filter')} style={{alignItems:'center', justifyContent:'center', height: 40, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'black', borderWidth: 1, flex:1}}>

                    <Text>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>console.log('sorted')} style={{alignItems:'center', justifyContent:'center', height: 40, borderColor: 'black', borderWidth: 1, flex:1, borderRightWidth: 0}}>
                    <Text>Sort</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'red', alignSelf:'center', marginTop: 14}}>Association</Text>
            <View style={{marginVertical: 4, width: 70, backgroundColor: 'red', height: 4, alignSelf: 'center', marginRight: 40, marginBottom: 14}} />
            <FlatList data={listData} renderItem={renderItem} style={{marginBottom: 140}} contentContainerStyle={{paddingVertical: 10}} />
</View>
            </Container>
    )

}

export default HomeScreen;