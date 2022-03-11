import React, { useLayoutEffect, useState }  from 'react';
import { FlatList, StyleSheet, Text, View, StyleProp, TouchableOpacity, Image } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple'

const data = [
    {id:1, label: `Under $250 (681)`, value: 'Under $250'},
    {id:2, label: '$250 - $500 (0)', value: '$250 - $500' },
    {id:3, label: '$500 - $1,000 (0)', value: '$500 - $1,000' },
    {id:4, label: '$1,000 - $2,000 (0)', value: '$1,000 - $2,000' },
    {id:5, label: '$2,000 - $3,000 (0)', value: '$2,000 - $3,000' },
    {id:6, label: '$3,000 - $5,000 (0)', value: '$3,000 - $5,000' },
    {id:7, label: 'Over $5,000 (0)', value: 'Over $5,000' },
]


type Props = {
	navigation: any;
};

const PriceScreen = (props) => {
  const [selectedFruit, setSelectedFruit] = useState([]);

  // useLayoutEffect(() => {
	// 	props.navigation.setOptions({
	// 		headerRight: () => (
  //       <TouchableOpacity style={{paddingHorizontal: 10}}>
  //         <Text>clear all</Text>
  //       </TouchableOpacity>
  //       )
	// 	});
	// }, [props.navigation]);
  

    const onSelectionsChange = (selectedFruits) => {
      setSelectedFruit(selectedFruits);
    }

    const renderLabel = (label) => {
      return (
        <View style={{flexDirection: 'row', justifyContent:'center',  }}>
          <View style={{marginLeft: 10, }}>
            <Text style={{color: 'black', height: 50, textAlignVertical:'center'}}>{label}</Text>
          </View>
        </View>
      )
    }

    return (
        <View style={[styles.container, { backgroundColor: '#fff' }]}>
      
        <SelectMultiple
          items={data}
          renderLabel={renderLabel}
          selectedItems={selectedFruit}
          style={{marginBottom: 60}}
          rowStyle={{height: 32, borderBottomWidth: 0 }}
          onSelectionsChange={onSelectionsChange} />
       
    </View>
    )

}
export default PriceScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
        paddingVertical: 5,
        margin: 3,
        flexDirection: 'row',
        backgroundColor: '#192338',
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: -1,
      },
      number: {fontSize: 14, color: '#000'},
      selected: {backgroundColor: '#FA7B5F'},
      lightText: {
        color: '#f7f7f7',
        width: 200,
        paddingLeft: 15,
        fontSize: 12,
      },
});