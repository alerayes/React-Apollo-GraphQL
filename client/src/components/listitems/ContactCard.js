import { Card } from "antd"
import {EditOutlined} from "@ant-design/icons"
import RemoveContact from "../buttons/RemoveContact"
import { useState } from "react"
import UpdateContact from "../forms/UpdateContact"

const getStyles = () => ({
    card: {
        width: '500px'
    }
})


const ContactCard = props => {
    const [id] = useState(props.id)
    const [firstName, setFirstName] = useState(props.firstName)
    const [lastName, setLastName] = useState(props.lastName)
    const [editMode, setEditMode] = useState(false)

    const styles = getStyles()


    const handleButtonClick = () => {
        setEditMode(!editMode)
    }

    console.log('props', props)

    return(
        <div>
        {editMode ? (
          <UpdateContact
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
            onButtonClick={handleButtonClick}
          />
        ) : (
          <Card
            style={styles.card}
            actions={[
              <EditOutlined key='edit' onClick={handleButtonClick}/>,
              <RemoveContact id={id}/>
            ]}
          >
            {firstName} {lastName}
          </Card>
        )}
      </div>
    )
}

export default ContactCard
