import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './choices-level.styles';
import {AuthService} from '../login/auth.service';
import {DishService} from '../../shared/DishService';

export default class ChoicesLevelScreen extends React.Component {
    authService = new AuthService();
    dishService = new DishService();

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            dish: null,
            step: null,
            steps: null,
            stepNum: 1,
            penalties: 0,
            loaded: false,
            multipleCorrect: false,
            selectedOptions: []
        }
    }

    async componentWillMount() {
        try {
            const user = await this
                .authService
                .getUser();
            const dishID = this
                .props
                .navigation
                .getParam('dishID', null);
            const dish = await this
                .dishService
                .getDish(dishID);

            this.setState({user});

            this.constructLevel(dish);
        } catch (e) {
            console.log(e)
        }
    }

    constructLevel(dish) {
        const steps = dish.steps;
        steps.sort((a, b) => a.order - b.order);
        this.setState({dish, steps});
        this.loadStep(this.state.stepNum);
    }

    loadStep(number) {
        const steps = this.state.steps;
        const maxSteps = steps.length;
        const index = number - 1;
        if (index < maxSteps) {
            const step = steps[index];
            step.options = this.shuffle(step.options);
            this.setState({step});
            this.setState({
                multipleCorrect: step.correctOptions.length > 1
            });
            this.setState({selectedOptions: []});
            this.setState({loaded: true})
        }else{
            this.props.navigation.navigate('Success', {dish: this.state.dish, penalties: this.state.penalties});
        }
    }

    shuffle(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    checkSelection(option) {
        let stepNum = this.state.stepNum;
        const correct = this.state.step.correctOptions[0];
        if (option.id === correct) {
            ++stepNum;
            this.setState({stepNum});
            this.loadStep(stepNum);
        } else {
            const penalties = this.state.penalties + 1;
            this.setState({penalties});
            if (penalties === 3) {
                this
                    .props
                    .navigation
                    .navigate('Failure', {
                        dish: this.state.dish,
                        penalties: penalties
                    });
            }
        }
    }

    toggleSelection(option){
        const selected = this.state.selectedOptions;

        if(selected.includes(option.id)){
            const index = selected.indexOf(option.id);
            selected.splice(index,1);
        }else{
            selected.push(option.id);
        }
        this.setState({selectedOptions: selected});
    }

    checkSelections() {
        let stepNum = this.state.stepNum;
        const correct = this.state.step.correctOptions;
        const selected = this.state.selectedOptions;
        if(selected.length >= correct.length){

            correct.sort((a, b)=> a-b);
            selected.sort((a, b) => a - b);

            if (JSON.stringify(selected) === JSON.stringify(correct)) {
                ++stepNum;
                this.setState({
                    stepNum
                });
                this.loadStep(stepNum);
            } else {
                console.log('DEDUCTED')
                const penalties = this.state.penalties + 1;
                this.setState({
                    penalties
                });
                if (penalties === 3) {
                    this
                        .props
                        .navigation
                        .navigate('Failure', {
                            dish: this.state.dish,
                            penalties: penalties
                        });
                }
            }
        }
    }

    render() {
        return this.state.loaded
            ? (
                <View style={styles.container}>
                    <View style={styles.dishNameBox}>
                        <Text style={[styles.narrationText, styles.title]}>
                            {this
                                .state
                                .dish
                                .name
                                .toUpperCase()}
                        </Text>
                        <View style={styles.penaltyBox}>
                            {this.state.penalties > 2
                                ? <Image
                                        resizeMode="contain"
                                        style={[styles.penalty, styles.penaltyLoss]}
                                        source={require('../../assets/images/surprised-gordon.png')}/>
                                : <Image
                                    resizeMode="contain"
                                    style={[styles.penalty]}
                                    source={require('../../assets/images/mad-gordon.png')}/>
}
                            {this.state.penalties > 1
                                ? <Image
                                        resizeMode="contain"
                                        style={[styles.penalty, styles.penaltyLoss]}
                                        source={require('../../assets/images/surprised-gordon.png')}/>
                                : <Image
                                    resizeMode="contain"
                                    style={[styles.penalty]}
                                    source={require('../../assets/images/mad-gordon.png')}/>
}
                            {this.state.penalties > 0
                                ? <Image
                                        resizeMode="contain"
                                        style={[styles.penalty, styles.penaltyLoss]}
                                        source={require('../../assets/images/surprised-gordon.png')}/>
                                : <Image
                                    resizeMode="contain"
                                    style={[styles.penalty]}
                                    source={require('../../assets/images/mad-gordon.png')}/>
}
                        </View>
                    </View>
                    <View style={styles.ingredientsBox}>
                        {this.state.stepNum < this.state.steps.length &&<Text style={styles.narrationText}>The next ingredient is</Text>}
                        {this.state.stepNum === this.state.steps.length && <Text style={styles.narrationText}>Cook for...</Text>}
                        {this
                            .state
                            .step
                            .options
                            .map((option, index) => {
                                return <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                    if (!this.state.multipleCorrect) {
                                        this.checkSelection(option);
                                    }else{
                                        this.toggleSelection(option);
                                        this.checkSelections();
                                    }
                                }}
                                    style={[styles.ingredientsWrapper, this.state.selectedOptions.includes(option.id) ? styles.selected : styles.ingredientsWrapper]}>
                                    <Image
                                        resizeMode="contain"
                                        style={styles.ingredientsImage}
                                        source={{
                                        uri: option.image
                                    }}/>
                                </TouchableOpacity>
                            })}
                    </View>
                    <View style={styles.buttonsBox}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}
                            style={styles.quitButton}>
                            <Image
                                resizeMode="contain"
                                style={[styles.button, styles.quitButtonImage]}
                                source={require('../../assets/images/quit-button.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            : null;
    }
}
