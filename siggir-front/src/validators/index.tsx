export default function ValidatorSchema({ formik, element }: any) {
    return (
        <>
            {
                formik.touched[element] && formik.errors[element] ? (
                    <p className="pl-1 text-xs text-red-600">{formik.errors[element]}</p>
                ) : null
            }
        </>
    )
}