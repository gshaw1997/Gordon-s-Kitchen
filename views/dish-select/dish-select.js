import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './dish-select.styles';
import {AuthService} from '../login/auth.service';
import {DishService} from '../../shared/DishService';
import {titleCase} from '../../shared/titleCase';

export default class DishSelectScreen extends React.Component {
    authService = new AuthService();
    dishService = new DishService();
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            dishLevel: this
                .props
                .navigation
                .getParam('difficulty', null),
            dishes: [],
            loaded: false
        }
    }
/**
 * Before Screen Renders
 * 
 * @memberof DishSelectScreen
 */
async componentWillMount() {
        try {
            const level = this.state.dishLevel;
            const dishes = await this
                .dishService
                .getDishes(level);
            dishes.sort((a, b) => {
                return a.unlockedAt - b.unlockedAt;
            })
            this.setState({dishes, loaded: true});
        } catch (e) {
            console.log(e);
        }
    }
/**
 * When Component Renders
 * 
 * @memberof DishSelectScreen
 */
async componentDidMount() {
        try {
            const user = await this
                .authService
                .getUser();
            this.setState({user})
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return this.state.loaded
            ? (
                <ImageBackground
                    resizeMode="cover"
                    style={styles.container}
                    source={require('../../assets/images/dish-select-bg.png')}>
                    <Text style={styles.title}>Choose a Dish</Text>
                    {this.state.dishes.length
                        ? <View style={styles.buttonWrapper}>
                                {this
                                    .state
                                    .dishes
                                    .map((dish, index) => {
                                        const canPlay = (this.state.user.level.number >= dish.unlockedAt)
                                            ? true
                                            : false;
                                        return <TouchableOpacity
                                            key={index}
                                            onPress=
                                            { () =>{ if(canPlay){ this.props.navigation.navigate('Start', {dishID: dish.id}) } } }
                                            style={[
                                            styles.button, styles.button, !canPlay
                                                ? styles.disabled
                                                : styles.button
                                        ]}>
                                            <Text style={styles.buttonText}>
                                                {!canPlay
                                                    ? `Unlocked at level ${dish.unlockedAt}`
                                                    : titleCase(dish.name)}</Text>
                                        </TouchableOpacity>
                                    })}
                            </View>
                        : <View style={styles.paddedWrapper}>
                            <Text style={[styles.title, styles.comingSoon]}>More Levels Coming Soon!</Text>
                        </View>}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={styles.backButton}>
                        <Image
                            resizeMode="contain"
                            style={styles.backButtonImage}
                            source={require('../../assets/images/back-button.png')}/>
                    </TouchableOpacity>
                </ImageBackground>
            )
            : null;
    }
}
