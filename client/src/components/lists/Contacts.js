import { useQuery } from "@apollo/client"
import { List } from "antd"
import ContactCard from "../listitems/ContactCard"

const getStyles = () => ({
    list: {
        display: 'flex',
        justifyContent: 'center'
    }
})

const Contacts = () => {
    const styles = getStyles()

    const {loading, error, data} = useQuery()

    return (
        <List
            grid={{ gutter: 20, column:1}}
            style={styles.list}
        >
            <List.Item>
                <ContactCard/   >
            </List.Item>
        </List>
    )
}

export default Contacts