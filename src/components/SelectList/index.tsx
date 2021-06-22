import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Category } from "../Category";

import { categories } from "../../utils/categories";;
import { styles } from "./styles";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function SelectList({
    categorySelected,
    setCategory
}: Props) {
    return (
        <ScrollView 
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    );
}