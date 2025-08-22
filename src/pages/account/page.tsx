import { useEffect, useState } from 'react';
import AccountOverview from './overview/AccountOverview';
import { useNotify } from '../../store/ToastifyContext';
import dayjs from 'dayjs';
import { updateEmployee } from '../../services';
import { useAccount } from '../../store/Account context';
import { CreateFormByAccount, DayJsToString, HandleError, HandleResponse } from '../../utils';
import { employeeDefaultDataForm, type Account } from '../../interface/interfaces';
import { account_actions } from '../../store/Account context/state';
import { RESPONSE_DELAY } from '../../config/constants';

const AccountInfo = () => {
    const [state, dispatch] = useAccount();
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(employeeDefaultDataForm);
    const [img, setImg] = useState("");
    const notify = useNotify();
    const userData = state.currentAccount;

    if (state.isLoading) return <div>Loading...</div>
    if (state.error) return <div>{`Error: ${state.error}`}</div>

    useEffect(() => {
        setFormData(CreateFormByAccount(userData));
        setImg(userData.image);
    }, [])

    useEffect(() => {
        if (formData.image) setImg(URL.createObjectURL(formData.image));
        //Clean up
        return () => {
            setImg("");
        }
    }, [formData.image]);

    const handleImageUpload = (e: any) => {
        const image = (e.target.files) ? e.target.files[0] : null;
        setFormData({
            ...formData,
            image: image
        })
    };

    const onSubmitUpdate = async (e: any) => {
        try {
            e.preventDefault();
            if (formData.dateOfBirth == null) {
                const now = DayJsToString(dayjs());
                setFormData({
                    ...formData,
                    dateOfBirth: now
                })
            }
            setIsLoading(true);
            const response = await updateEmployee(formData);
            HandleResponse(response, notify, async () => {
                // console.log("check update info: ", response);
                dispatch(account_actions.updateAccountInfo(response.data as Account));
                await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY));
                setIsLoading(false);
                setIsEditing(false);
            })
        } catch (error) {
            HandleError(error, notify);
        }
    }

    const handleChange = (e: any) => {
        // console.log(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return <>
        <AccountOverview
            userData={userData}
            userForm={formData}
            imgUrl={img}
            isLoading={isLoading}
            isEditing={isEditing}
            handleImageUpload={handleImageUpload}
            handleChange={handleChange}
            onSubmit={onSubmitUpdate}
            setEditing={(e: any) => {
                e.preventDefault();
                // console.log("check event: ", e.target);
                setIsEditing(true);
            }}
        />
    </>
}

export default AccountInfo;