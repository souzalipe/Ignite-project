import  AvatarStylesModules from '../../styles/Avatar.module.css'

export function Avatar({ hasBorder= true, src }) {
  return (
    <img
      className={hasBorder ? AvatarStylesModules.avatarWithBorder : AvatarStylesModules.avatar}
      src={src}
    />
  );
}
