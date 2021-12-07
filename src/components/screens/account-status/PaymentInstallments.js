import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils/Colors';
import Header from '../../../palette/Header';
import TextScreen from '../../../palette/TextScreen';
import {backIcon_2, checkList_2, downloadIcon, imgBack, pdfIcon} from '../../../utils/Icons';
import {Layout} from '../../../styled-components/StyledComponents';
import Label from '../../../palette/Label';
import ActionButton from '../../../palette/ActionButton';
import VerticalSpace from '../../../palette/VerticalSpace';
import DataTable from '../../../palette/Table';
import {StoreContext} from '../../../store/Context';
import {observer} from 'mobx-react-lite';
import TablePaymentInstallments from '../../../palette/TablePaymentInstallments';

const PaymentInstallments = (props) => {

    const {dataStore} = useContext(StoreContext);
    const {paymentInstallments} = dataStore;

    return (
        <View style={styles.mainContainer}>
            <Header color={colors.secondColor} picBgColor={colors.secondColor} textColor={'#FFF'}/>
            <TextScreen text={'MI HOGAR'} subText={'Valores por pagar'} color={colors.secondColor}
                        colorTextContainer={'#FFF'} colorText={colors.appColor} icon={checkList_2}/>
            <View style={{flex: 1, backgroundColor: colors.secondColor, height: 350}}>
                <View style={styles.summaryContainer}>
                    <Layout center row space>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                                          onPress={() => props.navigation.navigate('AccountStatus')}>
                            {imgBack}
                            <Label text={'Volver'} color={colors.appColor} weight={'700'} left={10}/>
                        </TouchableOpacity>

                        {/*<TouchableOpacity style={{alignItems: 'center', flexDirection: 'row', marginRight: 10}}>
                            {pdfIcon}
                            <Label text={'Descargar'} color={colors.appColor} size={10}
                                   weight={'700'} left={5}/>
                        </TouchableOpacity>*/}
                    </Layout>
                    <VerticalSpace space={5}/>
                    {paymentInstallments && <TablePaymentInstallments paymentInstallments={paymentInstallments}/>}
                </View>
            </View>

        </View>
    );
};

export default observer(PaymentInstallments);

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: colors.appColor,
    },

    summaryContainer: {
        flex: 1,
        borderTopRightRadius: 30,
        backgroundColor: '#FFF',
        marginTop: 15,
        paddingTop: 10,
        paddingRight: 15,
        paddingLeft: 5,
        //paddingBottom:5,
        flexDirection: 'column',
        //justifyContent: 'space-between',
    },
});
