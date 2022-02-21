import React from 'react';

function ButtonTag({ name = "", id = "", onDelete }) {
    const handleDelete = (id) => {
        if (!onDelete) return

        onDelete(id)
    }
    return (
        <div style={{ display: "inline" }} className="mr-2 mb-1">
            {name !== "" &&
                <span className='tag-btn'>
                    {name}
                    <div color='danger' className='tag-btn__del' onClick={() => handleDelete(id)}>
                        x
                    </div>
                </span>
            }
        </div>
    );
}

export default ButtonTag;