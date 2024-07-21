import { sentenceUserInputDataTotal, ValidationTotalFucRetrunType } from './../type/Type';
const Joi = require('joi')




const inputCheckKoreanPattern = /^[가-힝0-9!?.\s]+$/;
const inputSentenceValidation = Joi.object({

    content: Joi.string().pattern(inputCheckKoreanPattern).min(2).required()
        .messages({
            'string.pattern.base' : '한글 및 숫자 특수기호 (!,.,?) 만 사용가능힙니다.',
            'string.empty' : '입력 값이 비어있습니다. 최소 5글자 이상 입력바랍니다.',
            'string.min' : '최소 5글자 이상 입력바랍니다.'
        })
    ,
    footnote: Joi.string().pattern(inputCheckKoreanPattern).optional(),
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


export async function validationTotal(validationData: sentenceUserInputDataTotal): Promise<ValidationTotalFucRetrunType> {
    // validationFucNum - 필요 Joi 검증 번호 / validationData - Joi 검증 대상 데이터
    const { footNoteCheckBox, changeParagraph, ...needValidate } = await validationData
    if (!footNoteCheckBox) await delete needValidate.footnote
    const { error, value } = await inputSentenceValidation.validate(needValidate)
    return { error, value }
}



