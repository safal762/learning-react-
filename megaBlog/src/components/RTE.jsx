
import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export function RTE({ name, control, defaultValue = "" }) {
    return (
        <div>
            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <Editor
                    apiKey='mnal402a7x6zjp6ieryzd3jeaihvt52xmnumxhd1y2fakl3b'
                        value={value}
                        init={{
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
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}
