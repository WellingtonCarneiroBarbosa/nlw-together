import React, { useState } from 'react';
import { View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';

import { Profile } from '../../components/Profile';
import { SelectList } from '../../components/SelectList';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);  
  }
  
  return(
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    
      <View>
        <SelectList
          categorySelected={category}
          setCategory={handleCategorySelected}
        />

        <View style={styles.content}>

        </View>
      </View>
      

    </View>
  );
}