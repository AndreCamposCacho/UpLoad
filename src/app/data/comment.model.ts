export interface Comment {
    entity_id: number,
    entity_type: string,
    comment_type: string,
    name: string,
    field_name: string,
    comment_body: string,
    created: string,
}

export function adaptComment(value: any) {
    return <Comment> {
        comment_body: value.comment_body,
        comment_type: value.comment_type,
        created: value.created,
        entity_id: Number.parseFloat(value.entity_id),
        entity_type: value.entity_type,
        field_name: value.field_name
    };
}


