interface Item{
    list : object[]
}

const TableFromList = ({ list } : Item) => {

const headers = list.length > 0 ? Object.keys(list[0]).filter(key => key !== 'id') : [];
console.log(headers);
  return (
    <table>
        <thead>
            <tr style={{fontWeight: "Bold"}}>
            {Object.keys(list) && Object.keys(list).map((index, header) =>(
                <th key={index}>{header}</th>
            ))}
            </tr>
        </thead>

        <tbody>
            {list && list.map((item: any) => (
            <tr key={item.id}>
                {headers.map((props) => (
                    <td>{item[props]}</td>
                ))}
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default TableFromList;
