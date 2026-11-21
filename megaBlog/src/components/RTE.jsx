import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
export function RTE({ name, control, deafultValue = "" }) {
    return (
        <div>
            <Controller
                // controller is a component of react-hook-form that connects the React-hook-form and the external components 
                // here the controller connects the react-hook-form and tinymce editior // controller  uses the control object.
                name={name || "content"}
                control={control}
                // control provides the control to the components from where it is called
                // control contains the form management functionality and information needed by React Hook Form.
                // It provides the mechanism for connecting fields to the form.
                render={({ field: { onChange } }) => {
                    <Editor

                        initialValue={deafultValue}
                        init={
                            {
                                menubar: true,

                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                plugins: [
                                    "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
                                    "help", "image", "insertdatetime", "link", "lists", "media",
                                    "preview", "searchreplace", "table", "visualblocks",
                                ],
                                height: 500,
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'

                            }
                        }
                        onEditorChange={onChange} // onEditiorChange is like a event listener of tinymce just like on change in js 
                        // but the onchange passed here is provided by react-hook-form works same as js eventlistener onChnage 
                        // so whenever something is changed in editor is calls the onChange function and triggers the feild of controller 
                        // like that the both onchange in connected 
                    />
                }}
            />
        </div>
    )
}

