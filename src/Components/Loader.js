import { ActivityIndicator } from 'react-native'

export const Loader = () => {
    return (
        <ActivityIndicator
            size="large"
            color="#fff"
            style={{ marginVertical: 25 }}
        />
    )
}
