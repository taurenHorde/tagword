import { SentenceUserInputDataTotal, ValidationInputSentenceFucRetrunType, CustomValidationType, MakeBookUserInputType, ValidationInputBookCloseFucRetrunType, CloseBookUserInputType, ValidationInputBookFucRetrunType, EditBookUserInputType, ValidationInputBookEditFucRetrunType } from './../type/Type';
const Joi = require('joi')

const customValidation: CustomValidationType = (value, helpers) => {
    const regex = /[가-힣]+/g
    const afterMatch = value.match(regex);
    const afterJoin = afterMatch ? afterMatch.join('') : '';
    if (afterJoin.length < 4) {
        return helpers.error('string.custom', { massage: '완성형 한글이 최소 5글자 이상 있어야 합니다.' })
    }
    return value;
}
const inputCheckKoreanPattern = /^[^\0-\x1F\x7F-\x9F]*$/;




const inputSentenceValidation = Joi.object({
    content: Joi.string().pattern(inputCheckKoreanPattern).min(5).custom(customValidation, '한글 5글자 이상 여부').required()
        .messages({
            // 'string.pattern.base': '한글 및 숫자 특수기호 (!,.,?) 만 사용가능하며 첫 글자는 한글이여야만 합니다.',
            'string.empty': '입력 값이 비어있습니다. 입력바랍니다.',
            'string.min': '최소 5글자 이상 입력바랍니다.',
            'string.custom': '완성형 한글이 최소 5글자 이상 있어야 합니다.'
        })
    ,
    footnote: Joi.string().pattern(inputCheckKoreanPattern).min(5).optional()
        .messages({
            // 'string.pattern.base': '한글 및 숫자 특수기호 (!,.,?) 만 사용가능하며 첫 글자는 한글이여야만 합니다.',
            'string.empty': '입력 값이 비어있습니다. 입력바랍니다.',
            'string.min': '최소 5글자 이상 입력바랍니다.'
        }),
    nickname: Joi.string().min(2).max(8).required()
        .messages({
            'string.empty': '닉네임은 2글자 ~ 8글자 사이로 입력바랍니다.',
            'string.min': '닉네임은 2글자 ~ 8글자 사이로 입력바랍니다.',
            'string.max': '닉네임은 2글자 ~ 8글자 사이로 입력바랍니다.'
        })
    ,
    password: Joi.string().min(4).max(8).required()
        .messages({
            'string.empty': '비밀번호는 2글자 ~ 8글자 사이로 입력바랍니다.',
            'string.min': '비밀번호는 4글자 ~ 8글자 사이로 입력바랍니다.',
            'string.max': '비밀번호는 4글자 ~ 8글자 사이로 입력바랍니다.'
        })
})

const inputBookValidation = Joi.object({
    title: Joi.string().pattern(inputCheckKoreanPattern).min(2).max(20).required()
        .messages({
            'string.empty': '제목은 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.min': '제목은 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.custom': '제목은 최소 2글자에서 20글자 사이로 입력바랍니다.'
        }),
    topic: Joi.string().pattern(inputCheckKoreanPattern).min(2).max(20).required()
        .messages({
            'string.empty': '주제는 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.min': '주제는 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.custom': '주제는 최소 2글자에서 20글자 사이로 입력바랍니다.'
        }),
    direction: Joi.string().pattern(inputCheckKoreanPattern).min(2).max(20).required()
        .messages({
            'string.empty': '방향은 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.min': '방향은 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.custom': '방향은 최소 2글자에서 20글자 사이로 입력바랍니다.'
        }),
    password1: Joi.string().min(4).max(12).required()
        .messages({
            'string.empty': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'string.min': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'string.custom': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.'
        }),
    password2: Joi.string().min(4).max(12).valid(Joi.ref('password1')).required()
        .messages({
            'string.empty': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'string.min': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'string.custom': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'any.only': '비밀번호가 서로 다릅니다.'
        }),
    mode: Joi.boolean().required()
})

const inputBookEditValidation = Joi.object({
    editTopic: Joi.string().pattern(inputCheckKoreanPattern).min(2).max(20).required()
        .messages({
            'string.empty': '주제는 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.min': '주제는 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.custom': '주제는 최소 2글자에서 20글자 사이로 입력바랍니다.'
        }),
    editDirection: Joi.string().pattern(inputCheckKoreanPattern).min(2).max(20).required()
        .messages({
            'string.empty': '방향은 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.min': '방향은 최소 2글자에서 20글자 사이로 입력바랍니다.',
            'string.custom': '방향은 최소 2글자에서 20글자 사이로 입력바랍니다.'
        }),
    editPassword: Joi.string().min(4).max(12).required()
        .messages({
            'string.empty': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'string.min': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'string.custom': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.'
        })
})

const inputBookCloseValidation = Joi.object({
    password: Joi.string().min(4).max(12).required()
        .messages({
            'string.empty': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'string.min': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.',
            'string.custom': '비밀번호는 최소 4글자에서 12글자 사이로 입력바랍니다.'
        })
})


export async function validationInputSentence(validationData: SentenceUserInputDataTotal): Promise<ValidationInputSentenceFucRetrunType> {
    // validationFucNum - 필요 Joi 검증 번호 / validationData - Joi 검증 대상 데이터
    const { footNoteCheckBox, changeParagraph, ...needValidate } = await validationData
    if (!footNoteCheckBox) await delete needValidate.footnote
    const { error, value } = await inputSentenceValidation.validate(needValidate)
    return { error, value }
}

export async function validationInputBook(validationData: MakeBookUserInputType): Promise<ValidationInputBookFucRetrunType> {
    const { error, value } = await inputBookValidation.validate(validationData)
    return { error, value }
}

export async function validationInputBookEdit(validationData: EditBookUserInputType): Promise<ValidationInputBookEditFucRetrunType> {
    const { error, value } = await inputBookEditValidation.validate(validationData)
    return { error, value }
}
// : Promise<ValidationInputBookCloseFucRetrunType>
export async function validationInputBookClose(validationData: CloseBookUserInputType): Promise<any> {
    const { error, value } = await inputBookCloseValidation.validate(validationData)
    return { error, value }
}