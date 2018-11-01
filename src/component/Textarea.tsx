import * as classnames from "classnames"
import * as React from "react"

interface ITextareaProps {
  isDanger?: boolean
  isFocused?: boolean
  isHovered?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  placeholder?: string
  rows?: number
}

export default class Textarea extends React.Component<ITextareaProps> {
  render() {
    const {
      isDanger,
      isFocused,
      isHovered,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      placeholder,
      rows,
    } = this.props

    const className = classnames("textarea", {
      "is-danger": isDanger,
      "is-focused": isFocused,
      "is-hovered": isHovered,
      "is-info": isInfo,
      "is-large": isLarge,
      "is-medium": isMedium,
      "is-primary": isPrimary,
      "is-small": isSmall,
      "is-success": isSuccess,
      "is-warning": isWarning,
    })

    return (
      <textarea
        className={className}
        placeholder={placeholder}
        rows={rows}
      />
    )
  }
}
