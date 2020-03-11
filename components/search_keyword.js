import { useState } from 'react';
import makeKey from '../fetch/makeKey';
import useSWR from 'swr';
import { debounce } from '../helpers/utility.helper';
import requester from '../fetch/requester';
import Autocomplete from 'react-autocomplete';

const SearchKeyword = ({ onSelect, initKeyword, onBlur, ...rest }) => {
  const [value, setValue] = useState(initKeyword || '');
  const [realValue, setRealValue] = useState(initKeyword || '');
  const [isOpen, setOpen] = useState(false);
  const deboundSetValue = debounce(value => {
    setValue(value);
  }, 300);
  const apiKey = makeKey({
    urlKey: 'search.GET_SEARCH_KEYWORD',
    params: { query: value }
  });

  const { data } = useSWR(value && isOpen ? apiKey : null, requester);
  const { results: keywords = [] } = data || {};

  return (
    <Autocomplete
      value={realValue}
      items={keywords}
      getItemValue={item => {
        return String(item.id);
      }}
      inputProps={{
        ...rest,
        onBlur: e => {
          if (onBlur) {
            onBlur(e, {
              setValue,
              setRealValue,
              value,
              realValue,
              isOpen,
              setOpen,
              keywords
            });
          }
        }
      }}
      onChange={e => {
        const { value } = e.target;
        setRealValue(value);
        deboundSetValue(value);
      }}
      onSelect={(value, item) => {
        onSelect(value, item, {
          setValue,
          setRealValue,
          value,
          realValue,
          isOpen,
          setOpen,
          keywords
        });
      }}
      onMenuVisibilityChange={isOpen => {
        setOpen(isOpen);
        // if (!isOpen) {
        //   //clear input text when close
        //   setValue('');
        //   setRealValue('');
        // }
      }}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.id}
          style={{ background: isHighlighted ? 'lightgray' : 'white' }}
        >
          {item.name}
        </div>
      )}
      open={!value ? false : isOpen}
      menuStyle={{
        borderRadius: '3px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '2px 0',
        fontSize: '90%',
        position: 'fixed',
        overflow: 'auto',
        maxHeight: '50%',
        zIndex: '1'
      }}
    />
  );
};

export default React.memo(SearchKeyword);
