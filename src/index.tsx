import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import Container from './components/Container/Container';
import {
    Alert,
    FlatList,
    Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import Images from './theme/images';
import moment from 'moment';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

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

const categories = [
    {
        id: 1,
        name: 'Hotel',
        image: Images.associate.icAcodo,
    },
    {
        id: 2,
        name: 'Association',
        image: Images.associate.icAcodo,
    },
    {
        id: 3,
        name: 'Petrol Pumps',
        image: Images.associate.icAcodo,
    },
    {
        id: 4,
        name: 'Internet',
        image: Images.associate.icAcodo,
    },
    {
        id: 5,
        name: 'Factory',
        image: Images.associate.icAcodo,
    },
    {
        id: 6,
        name: 'Company',
        image: Images.associate.icAcodo,
    },
    {
        id: 7,
        name: 'Company',
        image: Images.associate.icAcodo,
    },
    {
        id: 8,
        name: 'Bank & Finance',
        image: Images.associate.icAcodo,
    },
    {
        id: 9,
        name: 'Garage',
        image: Images.associate.icAcodo,
    },
    {
        id: 10,
        name: 'Lawyers',
        image: Images.associate.icAcodo,
    }
]
const HomeScreen = (props) => {
    const formatDate = (date) => {
        return moment(date).startOf('day').fromNow();
    }
    const renderItem = ({item, index}) => {
        return (
            <View style={{ 
                paddingHorizontal: 20,
                marginBottom: 10, 
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
                <View>
						<View style={{width: 120, height: 30, backgroundColor: 'red', justifyContent: 'center', alignSelf: 'flex-end', borderBottomLeftRadius: 10, borderTopRightRadius: 10, marginRight: -20}}>
							<View style={{alignItems: 'center', flexDirection: 'row', alignSelf: 'center'}}>
                                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>4</Text>
                            <Icon name='star-fill' size={14} style={{color: 'white', marginHorizontal: 6}}/>
                            <Text style={{fontSize: 14, fontWeight: '200',color: 'white'}}>| 1 Review</Text>
                            
                            </View>
                            
                        </View>
					</View>

                    <Image source={item.profile} style={{width: 117, height: 117, borderRadius: 117/2, alignSelf: 'center', marginVertical: 10}} />
                <Text style={{fontSize: 18, fontWeight: '600', marginBottom: 6}} numberOfLines={2}>{item.name}</Text>
                <Text style={{fontSize: 14, marginBottom: 6}} numberOfLines={2}>{item.address}</Text>
                <Text style={{fontSize: 14, marginBottom: 6, color: 'gray'}} numberOfLines={3}>{item.detail}</Text>
        <Text>{formatDate(item.posted_date)}</Text>
            </View>

        )

    }
    const renderCategories = ({item, index}) => {
        return (
            <Pressable style={{marginHorizontal: 20, marginBottom: 20}} onPress={() => console.log('header click')}>
                <ImageBackground blurRadius={3} source={item.image} style={{width: 80, height: 80, justifyContent:'center'}} imageStyle={{borderRadius: 40, }}>
                    <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold', alignSelf: 'center'}}>{item.name.charAt(0)}</Text>
                </ImageBackground>
                <Text style={{fontSize: 12, color: 'gray', textAlign: 'center', marginTop: 4}}>{item.name}</Text>
            </Pressable>
        )
    }

    const Header = () => {
        return (
            <View style={{marginBottom: 20}}>
                <FlatList keyExtractor={(item, index) => index.toString()} numColumns={3} data={categories} renderItem={renderCategories} contentContainerStyle={{height: 650, flexDirection: 'row', justifyContent: 'space-evenly'}} />
            </View>
        )
    }

    const Footer = () => {
        return (
            <View style={{marginBottom: 430}}>
                <FlatList data={listData} renderItem={renderItem} contentContainerStyle={{paddingVertical: 10}} />
            </View>
        )
    }
    return (
<Container style={{flex:1}} isSafeAreaView>
    <View>
            <View style={{marginVertical: 30, flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    width={86} height={40} 
                    style={{width: 86, height: 40}}
                    source={Images.home.icLogo}
                />
            </View>
            
            <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', height: 40, alignContent: 'center'}}>
                <TouchableOpacity onPressIn={() => props.navigation.navigate('TabScreen')} style={{alignItems:'center', justifyContent:'center', height: 40, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'black', borderWidth: 1, flex:1, flexDirection: 'row'}}>
                    <FontAwesome5Icon name='filter' size={14} style={{color: 'black', marginHorizontal: 6}}/>
                        <Text>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>console.log('sorted')} style={{alignItems:'center', justifyContent:'center', height: 40, borderColor: 'black', borderWidth: 1, flex:1, borderRightWidth: 0, flexDirection: 'row'}}>
                <FontAwesome5Icon name='sort' size={14} style={{color: 'black', marginHorizontal: 6}}/>
                    <Text>Sort</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 16}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'red', alignSelf:'center', marginTop: 14}}>Professional Services</Text>
            <View style={{marginVertical: 4, width: 70, backgroundColor: 'red', height: 4, alignSelf: 'center', marginLeft: -130, marginBottom: 14}} />
            
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 14, marginBottom: 10}}>
                <View style={{width: 120, height:1, backgroundColor: 'gray'}} />
                <Text style={{paddingHorizontal: 6, fontSize: 16, color: 'red', letterSpacing: 1}}>CATEGORIES</Text>
                <View style={{width: 120, height:1, backgroundColor: 'gray'}} />
            </View>
            
        
            <FlatList
            data={listData}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={Header}
            ListFooterComponent={Footer}
            showsVerticalScrollIndicator={false}
            />

            </View>
            
</View>
            </Container>
    )

}

export default HomeScreen;