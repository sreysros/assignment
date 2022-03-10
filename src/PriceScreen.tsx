import React, { useState }  from 'react';
import { FlatList, StyleSheet, Text, View, StyleProp, TouchableOpacity } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

const data = [
    {id:1, title: 'Under $250', count: 681, isSelect:false },
    {id:2, title: '$250 - $500', count: 0 , isSelect:false},
    {id:3, title: '$500 - $1,000', count: 0 , isSelect:false},
    {id:4, title: '$1,000 - $2,000', count: 0, isSelect:false },
    {id:5, title: '$2,000 - $3,000', count: 0, isSelect:false },
    {id:5, title: '$3,000 - $5,000', count: 0, isSelect:false },
    {id:5, title: 'Over $5,000', count: 0, isSelect:false },

]

const PriceScreen = () => {
    const [check1, setCheck1] = useState(false);
    const [dataSource, setDataSource] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState();

  const selectItem = item => {
      console.log(item, '=== item ====');
    item.isSelect = !item.isSelect;
    item.selectedClass = item.isSelect
      ? styles.selected
      : styles.list;

    setDataSource({
      dataSource: dataSource,
    });
  };

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
            key={item.id}
      style={[styles.list, item.selectedClass]}
      onPress={() => selectItem(data)}>
      <CheckBox
      key={item.id}
      
        onPress={() => selectItem(data)}
        checked={
            (item.selectedClass = item.isSelect
                ? !isChecked
                : isChecked)
        }
      />
      <Text style={styles.lightText} key={item.id}>
        {' '}
        {item.title.charAt(0).toUpperCase() +
          item.title.slice(1)}{' '}
      </Text>
    </TouchableOpacity>

        //     <CheckBox
        //     containerStyle={{backgroundColor: 'transparent', borderWidth: 0, marginVertical: 0}}
        //     title={`${item.title} (${item.count})`}
        //     checked={check1}
        //     textStyle={{fontWeight: '300', fontSize: 14}}
        //     onPress={() => setCheck1(!check1)}

        //   />
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <View>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => item.id.toString()}/>
  
        </View>
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