import React from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './login.styles';
import {AuthService} from './auth.service';

export default class LoginScreen extends React.Component {
    authService = new AuthService();
    secondTextInput;

    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
            login: false,
            formToggled: false,
            containerTop: [styles.containerTop],
            username: '',
            password: '',
            errorMsg: null
        }
    }

    async componentWillMount() {
        try {
            const user = await this
                .authService
                .getUser();
            if (user) {
                this
                    .props
                    .navigation
                    .navigate('Home');
            }
        } catch (e) {
            console.log(e)
        }
    }

    async handleLogin() {
        try {
            const username = this
                .state
                .username
                .trim();
            const password = this
                .state
                .password
                .trim();
            if (!username || !password) {
                return;
            }

            const user = await this
                .authService
                .login(this.state.username, this.state.password);
            this
                .props
                .navigation
                .navigate('Home');

        } catch (e) {
            this.setState({errorMsg: e})
        }
    }
    async handleSignUp() {
        try {
            const username = this
                .state
                .username
                .trim();
            const password = this
                .state
                .password
                .trim();
            if (!username || !password) {
                return;
            }

            const user = await this
                .authService
                .register(this.state.username, this.state.password);
            this
                .props
                .navigation
                .navigate('Home');

        } catch (e) {
            this.setState({errorMsg: e})
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={this.state.containerTop}>
                    <Image
                        resizeMode="contain"
                        style={styles.gordon}
                        source={require('../../assets/images/mad-gordon.png')}/>
                    <Text style={[styles.defaultText]}>Gordon's Kitchen</Text>
                </View>
                <View style={styles.containerBottom}>
                    {!this.state.formToggled && <View>
                        <Text style={styles.textLight}>Sign up or login</Text>
                    </View>}
                    {this.state.errorMsg && <View>
                        <Text style={[styles.errorMsg]}>{this.state.errorMsg}</Text>
                    </View>}
                    <View style={styles.buttonWrapper}>
                        {this.state.formToggled && <View style={[styles.textInputWrapper]}>
                            <TextInput
                                style={[styles.textInput]}
                                placeholder="Username"
                                returnKeyType={"next"}
                                onChangeText=
                                { (username) => this.setState({ username }) }
                                onFocus=
                                { () => this.setState({ containerTop: [styles.containerTop, styles.containerTopSmall], errorMsg: null }) }
                                onSubmitEditing=
                                { () => { this.secondTextInput.focus(); } }
                                blurOnSubmit={false}
                                underlineColorAndroid={'transparent'}/>
                        </View>
}
                        {this.state.formToggled && <View style={[styles.textInputWrapper]}>
                            <TextInput
                                style={[styles.textInput]}
                                ref=
                                { (input) => { this.secondTextInput = input; } }
                                placeholder="Password"
                                secureTextEntry
                                onChangeText=
                                { (password) => this.setState({ password }) }
                                onFocus=
                                { () => this.setState({ containerTop: [styles.containerTop, styles.containerTopSmall], errorMsg: null }) }
                                onSubmitEditing=
                                { () => { this.setState({containerTop: [styles.containerTop]}); if(this.state.signUp){ this.handleSignUp(); }else{ this.handleLogin(); } } }
                                underlineColorAndroid={'transparent'}/>
                        </View>
}
                        {!this.state.formToggled && <TouchableOpacity
                            onPress={() => this.setState({formToggled: true, signUp: true, login: false})}
                            style={[styles.button, styles.facebook]}>
                            <Text style={[styles.buttonText]}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>}
                        {this.state.signUp
                            ? <TouchableOpacity
                                    onPress=
                                    { () => this.handleSignUp() }
                                    style={[styles.button, styles.phone]}>
                                    <Text style={[styles.buttonText]}>
                                        SIGNUP
                                    </Text>
                                </TouchableOpacity>
                            : <TouchableOpacity
                                onPress=
                                { () =>{ if(!this.state.formToggled){ this.setState({formToggled: true, signUp: false, login: true}) }else{ this.handleLogin(); } } }
                                style={[styles.button, styles.phone]}>
                                <Text style={[styles.buttonText]}>
                                    LOGIN
                                </Text>
                            </TouchableOpacity>
}
                    </View>
                    {!this.state.formToggled && <Text style={[styles.textLight, styles.company]}>A+ Games</Text>}
                    {this.state.formToggled && <TouchableOpacity
                        onPress=
                        { () => this.setState({formToggled: false, signUp: false, login: false}) }
                        style={[styles.bottom]}>
                        <Text style={[styles.textLight, styles.backText]}>
                            Back
                        </Text>
                    </TouchableOpacity>}
                </View>
            </View>
        );
    }
}
