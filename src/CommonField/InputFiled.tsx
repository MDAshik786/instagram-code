import { InputFieldTypes } from "../Types/commonField";
import { userDataType } from "../Types/userType";
import Column from "./ColumnField";
import Row from "./RowField";

const InputField = ({ userData }: InputFieldTypes) => {
  return (
    <>
      {userData &&
        userData.map((data: userDataType, index: number) =>
          data.type !== "radio" &&
          data.type !== "checkbox" &&
          data.labelContent ? (
            <Row className={data.containerClassName} key={index}>
              {data.labelContent && (
                <label className={data.labelClassName}>
                  {data.labelContent}
                </label>
              )}
              <input
                type={data.type}
                className={data.inputClassName}
                name={data.name}
                value={data.value}
                onChange={data.onChange}
                autoComplete={data.autoComplete}
                onClick={data.onClick}
                placeholder={data.placeHolder}
              />
              <span className={data.spanClassName}>{data.errorMessage}</span>
            </Row>
          ) : data.name === "password" ? (
            <Row
              horizontalAlign="center"
              verticalAlign="center"
              className={data.containerClassName}
              key={index}
            >
              {data.labelContent && (
                <label className={data.labelClassName}>
                  {data.labelContent}
                </label>
              )}

              <input
                type={data.type}
                className={data.inputClassName}
                name={data.name}
                id={data.id}
                value={data.value}
                onChange={data.onChange}
                autoComplete={data.autoComplete}
                placeholder={data.placeHolder}
                key={index}
              />
              {data.radioContent && (
                <p className="rodio-content">{data.radioContent}</p>
              )}
              {data.passordVisibility && (
                <span
                  className={data.passwordClassName}
                  onClick={data.passwordOnClick}
                >
                  {data.passordVisibility}
                </span>
              )}
            </Row>
          ) : !data?.errorMessage && !data?.labelContent ? (
            <input
              type={data.type}
              className={data.inputClassName}
              name={data.name}
              id={data.id}
              value={data.value}
              onChange={data.onChange}
              autoComplete={data.autoComplete}
              placeholder={data.placeHolder}
              key={index}
            />
          ) : (
            <Row
              horizontalAlign="center"
              verticalAlign="center"
              className={data.containerClassName}
              key={index}
            >
              {data.labelContent && (
                <label className={data.labelClassName}>
                  {data.labelContent}
                </label>
              )}
              <Column
                horizontalAlign="center"
                verticalAlign="center"
                className={data.containerClassName}
              >
                <input
                  type={data.type}
                  className={data.inputClassName}
                  name={data.name}
                  id={data.id}
                  value={data.value}
                  onChange={data.onChange}
                  autoComplete={data.autoComplete}
                  placeholder={data.placeHolder}
                  key={index}
                />
                <p className="rodio-content">{data.radioContent}</p>
              </Column>
            </Row>
          )
        )}
    </>
  );
};

export default InputField;
