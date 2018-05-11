import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import {styles} from './friends.styles';
import {UserService} from '../../shared/UserService';
import {AuthService} from '../login/auth.service';

export default class FriendsScreen extends React.Component {
    authService = new AuthService();
    userService = new UserService();
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            friendIDs: [],
            searchTxt: '',
            userList: [],
            isSelf: false,
            user: null,
        }

    }
    async componentDidMount() {
        try {

            const friends = this
                .props
                .navigation
                .getParam('friends', []);

            const isSelf = this
                .props
                .navigation
                .getParam('isSelf', false);

            const user =  await this
                .authService
                .getUser();

            user.friends = await this.userService.getFriends(user.id);

            const friendIDs = friends.map((user)=>user.id);

            this.setState({friends, isSelf, user, friendIDs, userList: friends});
        } catch (e) {
            console.log(e)
        }
    }

    async searchUsers() {
        try {
            const users = await this
                .userService
                .findUser(this.state.searchTxt);
                
                users = users.filter((user)=> user.id !== this.state.user.id)

            this.setState({userList: users})
        } catch (e) {
            console.log(e)
        }
    }

    async addFriend(playerID) {
        try {
            const friends = await this.userService.addFriend(this.state.user.id, playerID);
            const friendIDs = this.state.friendIDs;
            friendIDs.push(playerID);
            this.setState({
                friends, friendIDs
            });
        } catch (e) {
            console.log(e);
        }
    }

    async removeFriend(playerID){
        try {
             const friends = await this.userService.removeFriend(this.state.user.id, playerID);
             const friendIDs = this.state.friendIDs;
             const index = friendIDs.indexOf(playerID);
             friendIDs.splice(index, 1);

             this.setState({
                 friends,
                 friendIDs
             });
        } catch (e) {
            console.log(e);
        }
    }

    _keyExtractor = (item, index) => `${item.id}`;

    render() {
        return (
            <View style={[styles.container]}>
                {this.state.isSelf && <View style={styles.searchBarWrapper}>
                    <TextInput
                        style={[styles.searchBar]}
                        placeholder="Search for users"
                        onChangeText=
                        { (searchTxt) =>{ this.setState({ searchTxt }); if(!searchTxt){ this.setState({userList: this.state.friends}) } } }
                        onFocus=
                        { () => this.setState({ containerTop: [styles.containerTop, styles.containerTopSmall], errorMsg: null }) }
                        onSubmitEditing=
                        { () => this.searchUsers() }
                        blurOnSubmit={true}
                        underlineColorAndroid={'transparent'}/>
                </View>}

                {this.state.userList.length
                    ? <FlatList
                            style={styles.userList}
                            contentContainerStyle={{
                            paddingBottom: 60
                        }}
                            data={this.state.userList}
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            renderItem={({item, index}) => {
                            const user = item;
                            const isFriend = this.state.friendIDs.includes(user.id);
                            return (
                                <TouchableOpacity
                                    style={[
                                    styles.userCard, index % 2 === 0
                                        ? styles.userCardEven
                                        : styles.userCardOdd
                                ]}
                                onPress={()=> this.props.navigation.navigate('Profile', {userID: item.id})}>
                                    <View>
                                        <Text style={[styles.usernameTxt]}>{user.username}</Text>
                                        <Text style={[styles.defaultTxt]}>
                                            <Text style={styles.levelTxt}>Level&nbsp;{user.level.number}&nbsp;
                                            </Text>
                                            <Text>
                                                Completion{user.completed.length === 1
                                                    ? ''
                                                    : 's'}&nbsp;{user.completed.length}</Text>
                                        </Text>
                                    </View>
                                    <TouchableOpacity 
                                    style={[styles.addButton, isFriend ? styles.minusButton : styles.plusButton]}
                                    onPress={()=>{
                                        if(isFriend){
                                            this.removeFriend(user.id);
                                        }else{
                                            this.addFriend(user.id);
                                        }
                                    }} 
                                    >
                                        <Text style={[styles.buttonTxt]}>{isFriend ? '-' : '+'}</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            )
                        }}/>
                    : <View style={styles.noUsersWrapper}>
                        {this.state.searchTxt
                            ? <Text style={styles.noUsersTxt}>No users found :/</Text>
                            : <View>
                                <Text style={styles.noUsersTxt}>No friends :/</Text>
                                {this.state.isSelf && <Text style={styles.noUsersTxt}>Search to add more</Text>}
                            </View>}
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
