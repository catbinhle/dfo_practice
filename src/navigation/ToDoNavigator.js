import { createStackNavigator, createAppContainer } from "react-navigation"
import ToDoScreen from '../screens/ToDoScreen'
import colors from '../configs/colors'
import * as strings from '../configs/strings'

const ToDoNavigator = createStackNavigator(
	{
		'TODOSCREEN': {
			screen: ToDoScreen,
			navigationOptions: {
                headerTitle: strings.HeaderApp,
                headerStyle: {backgroundColor: colors.darkBlue},
                headerTitleStyle: {color: colors.white}
            }
		},
	}
)

export default createAppContainer(ToDoNavigator)