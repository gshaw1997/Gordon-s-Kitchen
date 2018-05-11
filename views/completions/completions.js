import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import {styles} from './completions.styles';
import {DishService} from '../../shared/DishService';
import {titleCase} from '../../shared/titleCase';

export default class CompletionsScreen extends React.Component {
    dishService = new DishService();
    constructor(props) {
        super(props);
        this.state = {
            completions: []
        }

    }
    async componentDidMount() {
        try {

            const completions = this
                .props
                .navigation
                .getParam('completed', []);

            completions = await Promise.all(completions.map(async(completion) => {
                const dish = await this
                    .dishService
                    .getDish(completion.dishID);
                completion.dish = dish;
                return completion;
            }));

            console.log('COMPLETED: ', completions)

            this.setState({completions});
        } catch (e) {
            console.log(e)
        }
    }

    _keyExtractor = (item, index) => `${index}`;

    render() {
        return (
            <View style={[styles.container]}>
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Completions</Text>
                </View>
                {this.state.completions.length
                    ? <FlatList
                            style={styles.completedList}
                            contentContainerStyle={{
                            paddingBottom: 60
                        }}
                            data={this.state.completions}
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            renderItem={({item, index}) => {
                            return (
                                <View
                                    style={[
                                    styles.completedCard, index % 2 === 0
                                        ? styles.userCardEven
                                        : styles.userCardOdd
                                ]}>
                                    <View>
                                        <Text style={styles.defaultTxt}>{titleCase(item.dish.name)}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.defaultTxt}>Score: {item.score}</Text>
                                    </View>
                                </View>
                            )
                        }}/>
                    : <View style={styles.noCompletedWrapper}>
                        <Text style={styles.noCompletedTxt}>No dishes completed :/</Text>
                    </View>}
                <TouchableOpacity
                    style={[styles.button, styles.backButton]}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.buttonTxt}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
