import classNames from 'classnames';

export const IconsList = ({ icons, className }) => {
  return (
    <div className={classNames('icons ', className)}>
      {icons.map((icon) => {
        return <IconItem key={icon.path} path={icon.path} label={icon.label} />;
      })}
    </div>
  );
};

const IconItem = ({ path, label }) => {
  return (
    <div className="icons__item">
      <div className="icons__icon">
        <img src={path} alt="sfg" />
      </div>
      <div className="icons__label">{label}</div>
    </div>
  );
};

// export default IconsList;
