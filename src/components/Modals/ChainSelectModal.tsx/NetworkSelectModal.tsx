import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import Modal from 'components/Modal/Modal';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { formState, initialNetworksState, useFormActions } from 'states/formState';
import { modalState, useModalActions } from 'states/modalState';
import { Box, FlexCol, FlexRow } from 'theme/components';
import { IForm, SupportedNetworks } from 'utils/types';
import Multichain from '/public/icons/multichain.svg';

const NetworkSelectModal = () => {
  const { networks } = useRecoilValue<IForm>(formState);
  const { isModalVisible, resetModalStatus } = useModalActions();
  const [selectedNetworks, setSelectedNetworks] = useState<SupportedNetworks[]>(networks);

  const { setNetworks } = useFormActions();

  const isChecked = (network: SupportedNetworks) =>
    selectedNetworks.findIndex(
      (selectedNetwork: SupportedNetworks) => selectedNetwork === network
    ) !== -1;

  const setChecked = useCallback(
    (network: SupportedNetworks) => {
      const checkedIndex = selectedNetworks.findIndex(
        (selectedNetwork: SupportedNetworks) => selectedNetwork === network
      );
      if (checkedIndex === -1) {
        setSelectedNetworks([...selectedNetworks, network]);
      } else {
        const list = [...selectedNetworks];
        list.splice(checkedIndex, 1);
        setSelectedNetworks(list);
      }
    },
    [selectedNetworks]
  );

  return (
    <Modal
      title={'NETWORK SELECT'}
      icon={<Multichain />}
      isVisible={isModalVisible('NETWORK_SELECT')}
      onSave={() => {
        setNetworks(selectedNetworks);
        resetModalStatus();
      }}
      onCancel={() => {
        setSelectedNetworks(networks);
        resetModalStatus();
      }}
    >
      <FlexCol gap='0x'>
        <FlexRow justifyContent={'space-between'} marginTop='2x'>
          <Checkbox
            label={'14 networks selected'}
            checked={selectedNetworks.length >= 1}
            checkmarkType='line'
            setChecked={() =>
              selectedNetworks.length <= 1
                ? setSelectedNetworks(initialNetworksState)
                : setSelectedNetworks([])
            }
          />
          <Button label='Clear' color='action' onClick={() => setSelectedNetworks([])} />
        </FlexRow>
        <Box
          borderColor={'separator-non-opaque'}
          borderWidth='1px'
          borderStyle='solid'
          marginBottom={'1x'}
        />
        {Object.values(SupportedNetworks).map((network: SupportedNetworks) => (
          <Checkbox
            label={network}
            variant='button'
            key={network}
            checked={isChecked(network)}
            setChecked={() => setChecked(network)}
          />
        ))}
      </FlexCol>
    </Modal>
  );
};

export default NetworkSelectModal;
