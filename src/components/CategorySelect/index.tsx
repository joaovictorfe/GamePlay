import React from 'react';
import { ScrollView } from 'react-native';
import style from './style';

import { categories } from '../../utils/categories';
import Category from '../Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

const CategorySelect = ({ categorySelected, setCategory, hasCheckBox = false }: Props) => {
    return (
        <ScrollView
            horizontal
            style={style.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map((category) => {
                    return <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasChackbox={hasCheckBox}
                    />
                })
            }
        </ScrollView>
    );
}
export default CategorySelect;