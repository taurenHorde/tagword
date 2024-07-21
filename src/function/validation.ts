import { sentenceUserInputDataTotal, ValidationTotalFucRetrunType, CustomValidationType } from './../type/Type';
const Joi = require('joi')

const customValidation: CustomValidationType = (value, helpers) => {
    const regex = /[가-힣]+/g
    const afterMatch = value.match(regex);
    const afterJoin = afterMatch ? afterMatch.join('') : '';
    if (afterJoin.length < 4) {
        return helpers.error('string.custom', { massage: '최소 5글자 이상 입력바랍니다. 한글입력이 적어도 5글자 이상 입력하셔야합니다.' })
    }
    return value;
}
const inputCheckKoreanPattern = /^[가-힣][가-힣0-9!?.\s]*$/;
const inputSentenceValidation = Joi.object({

    content: Joi.string().pattern(inputCheckKoreanPattern).min(5).custom(customValidation, '한글 5글자 이상 여부').required()
        .messages({
            'string.pattern.base': '한글 및 숫자 특수기호 (!,.,?) 만 사용가능하며 첫 글자는 한글이여야만 합니다.',
            'string.empty': '입력 값이 비어있습니다. 최소 5글자 이상 입력바랍니다.',
            'string.min': '최소 5글자 이상 입력바랍니다. 한글입력이 적어도 5글자 이상 입력하셔야합니다..',
            'string.custom': '최소 5글자 이상 입력바랍니다. 한글입력이 적어도 5글자 이상 입력하셔야합니다.'
        })
    ,
    footnote: Joi.string().pattern(inputCheckKoreanPattern).min(2).optional()
        .messages({
            'string.pattern.base': '한글 및 숫자 특수기호 (!,.,?) 만 사용가능하며 첫 글자는 한글이여야만 합니다.',
            'string.empty': '입력 값이 비어있습니다. 최소 2글자 이상 입력바랍니다.',
            'string.min': '최소 2글자 이상 입력바랍니다.'
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


export async function validationTotal(validationData: sentenceUserInputDataTotal): Promise<ValidationTotalFucRetrunType> {
    // validationFucNum - 필요 Joi 검증 번호 / validationData - Joi 검증 대상 데이터
    const { footNoteCheckBox, changeParagraph, ...needValidate } = await validationData
    if (!footNoteCheckBox) await delete needValidate.footnote
    const { error, value } = await inputSentenceValidation.validate(needValidate)
    return { error, value }
}



