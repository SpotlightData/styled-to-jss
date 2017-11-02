  width: '100%',
  minHeight: '100vh',
  height: '100vh',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
  background: `url(${bgImage}) no-repeat center center`,
  backgroundSize: 'cover',
  '&:before': {
    content: '',
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    zIndex: '1',
    top: '0',
  },
  '& .isoLoginContentWrapper': {
    width: '500px',
    height: '100%',
    overflowY: 'auto',
    zIndex: '10',
    position: 'relative',
  },
  '& .isoLoginContent': {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '70px 50px',
    position: 'relative',
    backgroundColor: '#ffffff',
    '& @media only screen and (max-width: 767px)': {
      width: '100%',
      padding: '70px 20px',
    },
    '& .isoLogoWrapper': {
      width: '100%',
      display: 'flex',
      marginBottom: '50px',
      justifyContent: 'center',
      flexShrink: '0',
      '& a': {
        fontSize: '24px',
        fontWeight: '300',
        lineHeight: '1',
        textTransform: 'uppercase',
        color: palette(['secondary', 2])(theme),
      },
    },
    '& .isoSignInForm': {
      width: '100%',
      display: 'flex',
      flexShrink: '0',
      flexDirection: 'column',
      '& .isoInputWrapper': {
        marginBottom: '15px',
        '&:last-of-type': {
          marginBottom: '0',
        },
        '& input': {
          '&::-webkit-input-placeholder': {
            color: palette(['grayscale', 0])(theme),
          },
          '&:-moz-placeholder': {
            color: palette(['grayscale', 0])(theme),
          },
          '&::-moz-placeholder': {
            color: palette(['grayscale', 0])(theme),
          },
          '&:-ms-input-placeholder': {
            color: palette(['grayscale', 0])(theme),
          },
        },
      },
      '& .isoHelperText': {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '1.2',
        color: palette(['grayscale', 1])(theme),
        margin: '15px 0',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '&:before': {
          content: '*',
          color: palette(['error', 0])(theme),
          paddingRight: '3px',
          fontSize: '14px',
          lineHeight: '1',
          position: 'absolute',
          top: '2px',
        },
      },
      '& .isoHelperWrapper': {
        marginTop: '35px',
        flexDirection: 'column',
      },
      '& .isoOtherLogin': {
        paddingTop: '40px',
        marginTop: '35px',
        borderTop: `1px dashed ${palette(['grayscale', 2])(theme)}`,
        '& > a': {
          display: 'flex',
          marginBottom: '10px',
          '&:last-child': {
            marginBottom: '0',
          },
        },
        '& button': {
          width: '100%',
          height: '42px',
          border: '0',
          fontWeight: '500',
          '&.btnFacebook': {
            backgroundColor: '#3b5998',
            '&:hover': {
              backgroundColor: 'darken(#3b5998, 5%)',
            },
          },
          '&.btnGooglePlus': {
            backgroundColor: '#dd4b39',
            marginTop: '15px',
            '&:hover': {
              backgroundColor: 'darken(#dd4b39, 5%)',
            },
          },
          '&.btnAuthZero': {
            backgroundColor: '#e14615',
            marginTop: '15px',
            '&:hover': {
              backgroundColor: 'darken(#e14615, 5%)',
            },
          },
          '&.btnFirebase': {
            backgroundColor: palette(['color', 5])(theme),
            marginTop: '15px',
            '&:hover': {
              backgroundColor: palette(['color', 6])(theme),
            },
          },
        },
      },
      '& .isoForgotPass': {
        fontSize: '12px',
        color: palette(['text', 3])(theme),
        marginBottom: '10px',
        textDecoration: 'none',
        '&:hover': {
          color: palette(['primary', 0])(theme),
        },
      },
      '& button': {
        fontWeight: '500',
      },
    },
  },
`;:undefined