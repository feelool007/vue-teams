import moment from "moment";
moment.locale("zh-tw");

export default {
  methods: {
    formatDateTimeFromNow: (datetime) => {
      return datetime === "" ? datetime : moment(datetime).fromNow();
    },
    formatNameInitials: (name) => {
      return name
        ? name
            .split(" ")
            .map((n, i, a) => (i === 0 || i + 1 === a.length ? n[0] : null))
            .join("")
        : name;
    },
    toastMessage(
      title,
      message,
      variant = null,
      auto_hide = true,
      position = "bottom-right"
    ) {
      this.$bvToast.toast(message, {
        title: title,
        variant,
        noAutoHide: !auto_hide,
        autoHideDelay: 3000,
        dismissible: false,
        toaster:
          "b-toaster-" + (this.is_in_multiscreen ? "bottom-left" : position),
      });
    },
  },
};